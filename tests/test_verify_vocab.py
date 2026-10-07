"""
test_verify_vocab.py — Comprehensive Master Test Suite for verify_vocab.py
French DELF/DALF B2/C1/C2 Learning Platform Verification Suite

Tests all schema validation rules, POS checks, anti-copying, template detection,
monotonic ID ordering, and JavaScript dataset loaders against specifications R1-R5.
"""

import os
import sys
import tempfile
import json
import unittest
from typing import Dict, Any, List

# Ensure parent directory is in python path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from verify_vocab import (
    REQUIRED_ROOT_KEYS,
    REQUIRED_EXAMPLE_KEYS,
    KNOWN_TEMPLATE_PATTERNS,
    KNOWN_NOUNS_ENDING_IN_MENT,
    NOUN_ONLY_SUFFIXES,
    extract_gloss_tokens,
    validate_entry,
    validate_dataset,
    verify_all_datasets,
    load_js_dataset,
    load_js_dataset_python,
)


def create_valid_example(idx: int = 1) -> Dict[str, str]:
    """Helper to generate a pristine, valid example sentence object."""
    return {
        "fr": f"Cette phrase d'exemple numéro {idx} illustre parfaitement l'usage authentique du mot en contexte.",
        "en": f"This example sentence number {idx} perfectly illustrates the authentic usage of the word in context.",
        "cn": f"这是第{idx}个示例句子，完美地说明了该词在语境中的真实用法。",
        "jp": f"これは第{idx}の例文であり、文脈における単語の真正な用法を完全に説明しています。"
    }


def create_valid_entry(
    id_num: int = 1,
    word: str = "Père",
    level: str = "A1",
    pos: str = "nom masculin • courant"
) -> Dict[str, Any]:
    """Helper to generate a pristine, valid 11-key vocabulary entry."""
    return {
        "id": id_num,
        "word": word,
        "phonetique": "/pɛʁ/",
        "level": level,
        "theme": "Famille & Relations",
        "type": pos,
        "definition": "Parent biologique ou adoptif de sexe masculin au sein du foyer.",
        "traduction_anglais": "father",
        "traduction_chinois": "父亲",
        "traduction_japonais": "父親",
        "examples": [create_valid_example(i + 1) for i in range(10)]
    }


class TestVerifyVocabSchema(unittest.TestCase):
    """Tests for Root Schema & Key Conformance (Requirement R1)."""

    def test_valid_entry_has_zero_errors(self):
        entry = create_valid_entry()
        global_ids = set()
        level_words = set()
        errors = validate_entry(entry, "A1", global_ids, level_words, 0)
        self.assertEqual(errors, [], f"Expected 0 errors, got: {errors}")
        self.assertIn(1, global_ids)
        self.assertIn("père", level_words)

    def test_non_dict_entry_rejected(self):
        errors = validate_entry(["not", "a", "dict"], "A1", set(), set(), 0)
        self.assertTrue(any("not a valid JSON object" in e for e in errors))

    def test_missing_required_root_keys(self):
        for key in REQUIRED_ROOT_KEYS:
            entry = create_valid_entry()
            del entry[key]
            global_ids = set()
            level_words = set()
            errors = validate_entry(entry, "A1", global_ids, level_words, 0)
            self.assertTrue(
                any("Missing required root key(s)" in e or f"Field '{key}' is missing" in e for e in errors),
                f"Failed to catch missing key: {key}"
            )

    def test_disallowed_extra_keys_rejected(self):
        extra_keys_to_test = ["source_verifiee", "custom_note", "quiz", "audio_url", "synonyms"]
        for extra in extra_keys_to_test:
            entry = create_valid_entry()
            entry[extra] = True
            global_ids = set()
            level_words = set()
            errors = validate_entry(entry, "A1", global_ids, level_words, 0)
            self.assertTrue(
                any("Disallowed extra root key(s) found" in e for e in errors),
                f"Failed to catch extra key: {extra}"
            )
            self.assertTrue(any(extra in e for e in errors))

    def test_null_or_empty_values_rejected(self):
        for key in ["word", "phonetique", "theme", "type", "definition", "traduction_anglais", "traduction_chinois", "traduction_japonais"]:
            entry_null = create_valid_entry()
            entry_null[key] = None
            errors_null = validate_entry(entry_null, "A1", set(), set(), 0)
            self.assertTrue(any(f"Field '{key}' cannot be null" in e for e in errors_null))

            entry_empty = create_valid_entry()
            entry_empty[key] = "   "
            errors_empty = validate_entry(entry_empty, "A1", set(), set(), 0)
            self.assertTrue(any(f"Field '{key}' cannot be empty" in e for e in errors_empty))

    def test_placeholder_values_rejected(self):
        placeholders = ["null", "undefined", "TODO", "N/A", "none", "None"]
        for pl in placeholders:
            entry = create_valid_entry()
            entry["traduction_anglais"] = pl
            errors = validate_entry(entry, "A1", set(), set(), 0)
            self.assertTrue(
                any("placeholder value" in e for e in errors),
                f"Failed to catch placeholder: {pl}"
            )


class TestVerifyVocabIDAndUniqueness(unittest.TestCase):
    """Tests for ID Uniqueness, Types, and Monotonic Ordering (Requirements R1, R5)."""

    def test_invalid_id_types(self):
        bad_ids = [0, -1, -100, "12", None, 3.14, True, False, [], {}]
        for bad_id in bad_ids:
            entry = create_valid_entry()
            entry["id"] = bad_id
            global_ids = set()
            level_words = set()
            errors = validate_entry(entry, "A1", global_ids, level_words, 0)
            self.assertTrue(
                any("Field 'id' must be a positive integer" in e or "Field 'id' is missing" in e for e in errors),
                f"Failed for bad_id: {bad_id}"
            )

    def test_duplicate_global_id_rejected(self):
        entry1 = create_valid_entry(id_num=100, word="Mot1")
        entry2 = create_valid_entry(id_num=100, word="Mot2")
        global_ids = set()
        level_words = set()
        errors1 = validate_entry(entry1, "A1", global_ids, level_words, 0)
        errors2 = validate_entry(entry2, "A1", global_ids, level_words, 1)
        self.assertEqual(errors1, [])
        self.assertTrue(any("Duplicate global ID detected: 100" in e for e in errors2))

    def test_monotonic_id_ordering_enforcement(self):
        # Entry with ID 5 preceded by ID 10 (decreasing)
        entry_bad_order = create_valid_entry(id_num=5, word="MotA")
        errors = validate_entry(entry_bad_order, "A1", set(), set(), 1, prev_id=10)
        self.assertTrue(any("Non-monotonic ID ordering" in e for e in errors))

        # Entry with ID 10 preceded by ID 10 (equal)
        entry_equal = create_valid_entry(id_num=10, word="MotB")
        errors_eq = validate_entry(entry_equal, "A1", set(), set(), 1, prev_id=10)
        self.assertTrue(any("Non-monotonic ID ordering" in e for e in errors_eq))

        # Entry with ID 11 preceded by ID 10 (strictly increasing)
        entry_ok = create_valid_entry(id_num=11, word="MotC")
        errors_ok = validate_entry(entry_ok, "A1", set(), set(), 1, prev_id=10)
        self.assertEqual(errors_ok, [])

    def test_duplicate_word_in_same_level_rejected(self):
        entry1 = create_valid_entry(id_num=1, word="Maison")
        entry2 = create_valid_entry(id_num=2, word="maison")
        global_ids = set()
        level_words = set()
        errors1 = validate_entry(entry1, "A1", global_ids, level_words, 0)
        errors2 = validate_entry(entry2, "A1", global_ids, level_words, 1)
        self.assertEqual(errors1, [])
        self.assertTrue(any("Duplicate word in level A1: 'maison'" in e for e in errors2))


class TestVerifyVocabPOSAndLinguistics(unittest.TestCase):
    """Tests for Part-of-Speech, Gender, and Phonetics Correctness (Requirement R2)."""

    def test_noun_without_gender_rejected(self):
        bad_pos_list = [
            "nom • courant",
            "nom",
            "nom • soutenu",
            "locution nominale",
            "substantif",
            "nom • formel"
        ]
        for bad_pos in bad_pos_list:
            entry = create_valid_entry(pos=bad_pos)
            global_ids = set()
            level_words = set()
            errors = validate_entry(entry, "A1", global_ids, level_words, 0)
            self.assertTrue(
                any("Noun type" in e and "must explicitly declare gender" in e for e in errors),
                f"Expected gender error for POS: {bad_pos}"
            )

    def test_valid_noun_genders_accepted(self):
        valid_pos_list = [
            "nom masculin • courant",
            "nom féminin • courant",
            "nom féminin • soutenu",
            "nom masculin / féminin • formel",
            "nom pluriel • courant",
            "nom masculin pluriel • soutenu",
            "nom féminin pluriel • formel",
            "locution nominale féminine • soutenu",
            "nom épicène • formel",
            "nom epicene • courant"
        ]
        for valid_pos in valid_pos_list:
            entry = create_valid_entry(pos=valid_pos)
            global_ids = set()
            level_words = set()
            errors = validate_entry(entry, "A1", global_ids, level_words, 0)
            self.assertEqual(errors, [], f"Expected 0 errors for valid POS: {valid_pos}")

    def test_substantif_misclassified_as_adverb_rejected(self):
        # Known nouns ending in -ment
        test_nouns = ["Hébergement", "Engagement", "Amendement", "Développement", "Gouvernement"]
        for noun in test_nouns:
            entry = create_valid_entry(word=noun, pos="adverbe • courant")
            errors = validate_entry(entry, "A1", set(), set(), 0)
            self.assertTrue(
                any("misclassified as adverbe" in e for e in errors),
                f"Failed to catch misclassification for {noun}"
            )

        # Suffix-based nouns
        suffix_nouns = ["Déclaration", "Exigence", "Solidarité", "Humanisme", "Psychologie"]
        for sfx_noun in suffix_nouns:
            entry = create_valid_entry(word=sfx_noun, pos="adverbe • soutenu")
            errors = validate_entry(entry, "A1", set(), set(), 0)
            self.assertTrue(
                any("misclassified as adverbe" in e for e in errors),
                f"Failed to catch misclassification for {sfx_noun}"
            )

    def test_legitimate_adverbs_accepted(self):
        valid_adverbs = [
            ("rapidement", "adverbe • courant"),
            ("subrepticement", "adverbe • soutenu"),
            ("souvent", "adverbe • courant"),
            ("toujours", "adverbe • courant"),
            ("irrémédiablement", "adverbe • soutenu")
        ]
        for w, pos in valid_adverbs:
            entry = create_valid_entry(word=w, pos=pos)
            errors = validate_entry(entry, "A1", set(), set(), 0)
            self.assertEqual(errors, [], f"Legitimate adverb '{w}' triggered false positive: {errors}")

    def test_phonetic_format_validation(self):
        # Valid slashed
        entry_slashed = create_valid_entry()
        entry_slashed["phonetique"] = "/mɛ.zɔ̃/"
        self.assertEqual(validate_entry(entry_slashed, "A1", set(), set(), 0), [])

        # Valid bracketed
        entry_bracketed = create_valid_entry()
        entry_bracketed["phonetique"] = "[mɛ.zɔ̃]"
        self.assertEqual(validate_entry(entry_bracketed, "A1", set(), set(), 0), [])

        # Invalid (no slashes or brackets)
        entry_bad = create_valid_entry()
        entry_bad["phonetique"] = "mɛ.zɔ̃"
        errors = validate_entry(entry_bad, "A1", set(), set(), 0)
        self.assertTrue(any("must be enclosed in slashes /.../ or brackets [...]" in e for e in errors))

        # Invalid (too short)
        entry_short = create_valid_entry()
        entry_short["phonetique"] = "/a/"
        self.assertEqual(validate_entry(entry_short, "A1", set(), set(), 0), [])
        entry_single = create_valid_entry()
        entry_single["phonetique"] = "a"
        errors_single = validate_entry(entry_single, "A1", set(), set(), 0)
        self.assertTrue(any("must be enclosed in slashes /.../ or brackets [...]" in e for e in errors_single))

    def test_level_validation(self):
        entry = create_valid_entry(level="B2")
        errors = validate_entry(entry, "A1", set(), set(), 0)
        self.assertTrue(any("does not match expected file level" in e for e in errors))

        entry_invalid = create_valid_entry(level="X9")
        errors_inv = validate_entry(entry_invalid, "X9", set(), set(), 0)
        self.assertTrue(any("not a recognized CEFR level" in e for e in errors_inv))

    def test_definition_length_and_quality(self):
        entry_short = create_valid_entry()
        entry_short["definition"] = "Court."
        errors = validate_entry(entry_short, "A1", set(), set(), 0)
        self.assertTrue(any("Definition too short" in e for e in errors))

        entry_pl = create_valid_entry()
        entry_pl["definition"] = "Définition à venir prochainement."
        errors_pl = validate_entry(entry_pl, "A1", set(), set(), 0)
        self.assertTrue(any("Definition contains placeholder" in e for e in errors_pl))


class TestVerifyVocabExamplesAndTranslations(unittest.TestCase):
    """Tests for Examples count, length, anti-copying, and templates (Requirement R3)."""

    def test_example_count_must_be_exactly_ten(self):
        counts = [0, 1, 5, 9, 11, 15]
        for count in counts:
            entry = create_valid_entry()
            entry["examples"] = [create_valid_example(i + 1) for i in range(count)]
            errors = validate_entry(entry, "A1", set(), set(), 0)
            self.assertTrue(
                any("must contain exactly 10 items" in e for e in errors),
                f"Failed to catch invalid example count: {count}"
            )

    def test_example_missing_or_extra_keys(self):
        entry = create_valid_entry()
        del entry["examples"][0]["jp"]
        entry["examples"][1]["disallowed_key"] = "bad"
        errors = validate_entry(entry, "A1", set(), set(), 0)
        self.assertTrue(any("Example #1 missing key(s)" in e for e in errors))
        self.assertTrue(any("Example #2 disallowed extra key(s)" in e for e in errors))

    def test_example_length_thresholds(self):
        entry = create_valid_entry()
        entry["examples"][0]["fr"] = "Trop court."
        entry["examples"][1]["en"] = "Too short."
        entry["examples"][2]["cn"] = "短"
        entry["examples"][3]["jp"] = "短"
        errors = validate_entry(entry, "A1", set(), set(), 0)
        self.assertTrue(any("Example #1 'fr' sentence too short" in e for e in errors))
        self.assertTrue(any("Example #2 'en' sentence too short" in e for e in errors))
        self.assertTrue(any("Example #3 'cn' translation too short" in e for e in errors))
        self.assertTrue(any("Example #4 'jp' translation too short" in e for e in errors))

    def test_example_french_terminal_punctuation(self):
        entry = create_valid_entry()
        entry["examples"][0]["fr"] = "Cette phrase est assez longue mais elle n'a pas de point final"
        errors = validate_entry(entry, "A1", set(), set(), 0)
        self.assertTrue(any("lacks terminal punctuation" in e for e in errors))

    def test_example_asian_scripts_validation(self):
        entry = create_valid_entry()
        entry["examples"][0]["cn"] = "This is mistakenly written in English."
        entry["examples"][1]["jp"] = "This is also mistakenly written in English."
        errors = validate_entry(entry, "A1", set(), set(), 0)
        self.assertTrue(any("does not contain Chinese CJK characters" in e for e in errors))
        self.assertTrue(any("does not contain Japanese characters" in e for e in errors))

    def test_anti_gloss_token_extraction(self):
        tokens_en = extract_gloss_tokens("equalization / fiscal equalization")
        self.assertIn("equalization / fiscal equalization", tokens_en)
        self.assertIn("equalization", tokens_en)
        self.assertIn("fiscal equalization", tokens_en)

        tokens_cn = extract_gloss_tokens("你好 (nǐhǎo) / 您好")
        self.assertIn("你好", tokens_cn)
        self.assertIn("您好", tokens_cn)

        tokens_jp = extract_gloss_tokens("父親 (ちちおや) / お父さん")
        self.assertIn("父親", tokens_jp)
        self.assertIn("お父さん", tokens_jp)

    def test_anti_gloss_copying_detection(self):
        entry = create_valid_entry()
        entry["traduction_anglais"] = "father / dad"
        entry["traduction_chinois"] = "父亲 (fùqīn)"
        entry["traduction_japonais"] = "父親 (ちちおや)"

        # Corrupt examples with exact root or sub-token copies
        entry["examples"][0]["en"] = "father"
        entry["examples"][1]["en"] = "Dad."
        entry["examples"][2]["cn"] = "父亲"
        entry["examples"][3]["jp"] = "父親"
        entry["examples"][4]["jp"] = "父親 (ちちおや)。"

        errors = validate_entry(entry, "A1", set(), set(), 0)
        self.assertTrue(any("Example #1 'en' is a copy of root word translation" in e for e in errors))
        self.assertTrue(any("Example #2 'en' is a copy of root word translation" in e for e in errors))
        self.assertTrue(any("Example #3 'cn' is a copy of root word translation" in e for e in errors))
        self.assertTrue(any("Example #4 'jp' is a copy of root word translation" in e for e in errors))
        self.assertTrue(any("Example #5 'jp' is a copy of root word translation" in e for e in errors))

    def test_forbidden_template_sentences_detection(self):
        templates = [
            "Il est important de réviser régulièrement pour progresser.",
            "Elle a réussi à comprendre malgré toutes les difficultés.",
            "Nous devrions analyser avant de prendre une décision finale.",
            "Est-ce que tu peux m'aider à terminer ce travail ?",
            "L'importance de l'art est reconnue par tous les spécialistes.",
            "Il a longuement parlé de ce sujet et de l'histoire.",
            "Nous avons besoin de trouver une solution concernant l'écologie.",
            "Regarde l'arbre, il est magnifique !",
            "J'ai acheté un nouveau livre hier après-midi.",
            "Il faut faire attention avec ce produit dans cette situation.",
            "C'est un exemple typique de réussite.",
            "C'est une idée particulièrement intéressante.",
            "Chaque jour, il est nécessaire de pratiquer.",
            "Je pense souvent à mes projets quand je travaille au bureau.",
            "Afin d'améliorer votre niveau, il faut étudier.",
            "Il est essentiel de dormir dans notre vie quotidienne.",
            "Tout le monde sait que le sport est très utile.",
            "Nous devons apprendre à écouter pour réussir.",
            "Il est indispensable de bien s'alimenter au quotidien.",
            "Dans notre société actuelle, il est primordial de préserver les ressources.",
            "Il convient de noter que l'éducation joue un rôle crucial.",
            "Grâce à une pratique régulière de l'exercice, on progresse vite."
        ]
        self.assertGreaterEqual(len(KNOWN_TEMPLATE_PATTERNS), 18)
        for tpl in templates:
            entry = create_valid_entry()
            entry["examples"][0]["fr"] = tpl
            errors = validate_entry(entry, "A1", set(), set(), 0)
            self.assertTrue(
                any("matches forbidden template pattern" in e for e in errors),
                f"Failed to catch template: {tpl}"
            )


class TestVerifyVocabDatasetAndCorpus(unittest.TestCase):
    """Tests for Dataset validation, Monotonic Ordering, N-gram repetition, and C2 sizing."""

    def test_ngram_template_repetition_detection(self):
        entries = []
        for i in range(5):
            entry = create_valid_entry(id_num=i + 1, word=f"Mot{i + 1}")
            entry["examples"][0]["fr"] = f"Dans ce nouveau contexte mondial, il convient d'agir avec prudence et discernement {i}."
            entries.append(entry)

        results, stats = validate_dataset(entries, "A1", set())
        self.assertTrue(any(
            any("Template sentence repetition: prefix 'dans ce nouveau contexte...'" in e for e in r["errors"])
            for r in results
        ))

    def test_dataset_monotonic_ordering_detection(self):
        # Entry 1 ID 1, Entry 2 ID 5, Entry 3 ID 3 (out of order)
        e1 = create_valid_entry(id_num=1, word="Un")
        e2 = create_valid_entry(id_num=5, word="Deux")
        e3 = create_valid_entry(id_num=3, word="Trois")
        results, stats = validate_dataset([e1, e2, e3], "A1", set())
        self.assertTrue(any("Non-monotonic ID ordering" in e for e in results[2]["errors"]))

    def test_c2_minimum_entries_enforcement(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            c2_file = os.path.join(tmpdir, "vocab_C2_data.js")
            # Write C2 with only 2 entries
            entries = [
                create_valid_entry(id_num=1376, word="Heuristique", level="C2"),
                create_valid_entry(id_num=1377, word="Paradigme", level="C2")
            ]
            with open(c2_file, "w", encoding="utf-8") as f:
                f.write(f"window.vocab_C2_Dataset = {json.dumps(entries)};")

            results = verify_all_datasets(tmpdir, target_files=[("C2", "vocab_C2_data.js")])
            self.assertFalse(results["success"])
            self.assertTrue(any("minimum 50 required" in e for e in results["levels"]["C2"]["errors"]))

    def test_missing_dataset_file_handling(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            results = verify_all_datasets(tmpdir, target_files=[("A1", "vocab_A1_data.js")])
            self.assertFalse(results["success"])
            self.assertTrue(any("File not found" in e for e in results["levels"]["A1"]["errors"]))


class TestVerifyVocabJSLoader(unittest.TestCase):
    """Tests for JavaScript Dataset Loaders (Dual-Engine: Node + Python Regex)."""

    def test_load_js_dataset_with_comments_and_trailing_commas(self):
        js_content = """
        // Header comment
        /* Block comment
           multiline */
        window.vocab_A1_Dataset = [
            {
                "id": 1,
                "word": "Père",
                "phonetique": "/pɛʁ/",
                "level": "A1",
                "theme": "Famille",
                "type": "nom masculin • courant",
                "definition": "Parent biologique ou adoptif masculin.",
                "traduction_anglais": "father",
                "traduction_chinois": "父亲",
                "traduction_japonais": "父親",
                "examples": [
                    {
                        "fr": "Mon père travaille ici.",
                        "en": "My father works here.",
                        "cn": "我父亲在这里工作。",
                        "jp": "私の父はここで働いています。",
                    },
                ],
            },
        ];
        """
        with tempfile.NamedTemporaryFile("w", encoding="utf-8", suffix=".js", delete=False) as f:
            f.write(js_content)
            temp_path = f.name

        try:
            # Test python fallback loader
            data_py = load_js_dataset_python(temp_path)
            self.assertEqual(len(data_py), 1)
            self.assertEqual(data_py[0]["word"], "Père")

            # Test standard dual loader
            data_dual = load_js_dataset(temp_path)
            self.assertEqual(len(data_dual), 1)
            self.assertEqual(data_dual[0]["word"], "Père")
        finally:
            if os.path.exists(temp_path):
                os.remove(temp_path)


if __name__ == "__main__":
    unittest.main()

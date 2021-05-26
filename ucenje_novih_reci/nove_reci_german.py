import codecs
from random import shuffle

from ucenje_novih_reci.word_complex import WordComplex


def learn_this_list_german(target_words_list):
    for count, word_complex in enumerate(target_words_list):

        print_loading_percentage(count, target_words_list)
        eng_art = "The " if word_complex.art else ""
        print(eng_art + word_complex.eng)
        translation_input = input("translation: ")

        if (word_complex.art.lower() + " " + word_complex.ger.lower()).strip() == translation_input.lower():
            print("true")
            print("-------------------------------------------------t")
            print("")
            continue

        elif translation_input == "exit":
            quit()
            print("-------------------------------------------------e")
            continue

        elif translation_input == "sss":
            print("skipped")
            print("-------------------------------------------------s")
            print("")
            continue

        else:
            print("false - " + word_complex.art + " " + word_complex.ger)
            list_of_false.append(word_complex)
            with open('new_words_list_of_false.txt', 'w') as f:
                for word_complex in list_of_false:
                    f.write(word_complex.art + " " + word_complex.ger + "\n")
            print("-------------------------------------------------f")
            print("")
        continue

    print_success_rate()


def learn_this_list_english(list):
    for count, word_complex in enumerate(list):
        length = len(list)
        percentage = (count / length) * 100
        print(str(round(percentage, 1)) + " %")
        print(word_complex.get_german())
        translation_input = input("translation: ")

        if word_complex.eng.lower() == translation_input.lower():
            print("true")
            print("-------------------------------------------------t")
            print("")
            continue

        elif translation_input == "exit":
            quit()
            print("-------------------------------------------------e")
            continue

        elif translation_input == "sss":
            print("skipped")
            print("-------------------------------------------------s")
            print("")
            continue

        else:
            print("false - " + word_complex.eng)
            list_of_false.append(word_complex)
            with open('new_words_list_of_false.txt', 'w') as f:
                for word_complex in list_of_false:
                    f.write(word_complex.eng + "\n")
            print("-------------------------------------------------f")
            print("")
        continue

    print_success_rate()


def print_loading_percentage(count, target_words_list):
    length = len(target_words_list)
    percentage = (count / length) * 100
    print(str(round(percentage, 1)) + " %")


def print_success_rate():
    correct_answers_percent = (round(((len(list_of_false) / len(target_list)) * 100), 1))
    if correct_answers_percent != 100:
        print("{} % of incorrect answers in first go".format(correct_answers_percent))


def get_target_list():
    with codecs.open("new_words.txt", 'r', 'utf-8') as f:
        target_words_list = f.readlines()
    target_words_list = [x.strip() for x in target_words_list]
    target_words_list = filter(None, target_words_list)
    word_complex_list = []

    for line in target_words_list:
        german_art = ''
        german_word = ''

        if not (" - " in line): raise ValueError("LINE DOES NOT CONTAIN ' - '  >>>  " + line)

        word_line_array = line.split(" - ")
        english_word = word_line_array[0]

        articles = ["der ", "die ", "das ", "Der ", "Die ", "Das "]
        if any(x in word_line_array[1] for x in articles):
            german_art = word_line_array[1].split()[0]
            try:
                german_word = word_line_array[1].split()[1]
            except:
                print(word_line_array)
        else:
            german_word = word_line_array[1]

        word_complex = WordComplex(english_word, german_art, german_word)
        word_complex_list.append(word_complex)

    shuffle(word_complex_list)
    for x in word_complex_list:
        print(x.get_all_string())
    return word_complex_list


def learn_again():
    if not list_of_false:
        print("Izuvas!")
    else:
        print("--------------  AGAIN --------------------")
        if learning_mode == "g":
            learn_this_list_german(list_of_false)
        else:
            learn_this_list_english(list_of_false)
        for word_you_got_wrong in list_of_false:
            print(word_you_got_wrong.get_all_string())


# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

target_list = get_target_list()
list_of_false = []

learning_mode = "e"
# learning_mode = input("write GERMAN (g) or write ENGLISH (e) : ")
print("-------------------------------------------------f")

if learning_mode == "g":
    learn_this_list_german(target_list)
    learn_again()
else:
    learn_this_list_english(target_list)
    learn_again()

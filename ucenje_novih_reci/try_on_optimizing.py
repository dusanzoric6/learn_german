import codecs
from random import shuffle

from ucenje_novih_reci.word_complex import WordComplex


def lerarn_this_list(target_words_list):
    false_words_list = []
    for word_complex in target_words_list:

        print("The " + word_complex.eng)
        translation_input = input("translation: ")

        if word_complex.art.lower() + " " + word_complex.ger.lower() == translation_input.lower():
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
            false_words_list.append(word_complex)
            with open('new_words_list_of_false.txt', 'w') as f:
                for word in false_words_list:
                    f.write(word.art + " " + word.ger + "\n")
            print("-------------------------------------------------f")
            print("")
        continue

    return false_words_list


with codecs.open("new_words.txt", 'r', 'utf-8') as f:
    target_words_list = f.readlines()
target_words_list = [x.strip() for x in target_words_list]
word_complex_list = []

for line in target_words_list:
    word_line_array = line.split()
    word_complex = WordComplex(word_line_array[1], word_line_array[3], word_line_array[4])
    word_complex_list.append(word_complex)

shuffle(word_complex_list)
list_of_false = lerarn_this_list(word_complex_list)

if not list_of_false:
    print("Izuvas!")
else:
    print("--------------  AGAIN --------------------")
    list_of_false = lerarn_this_list(list_of_false)
    while list_of_false:
        list_of_false = lerarn_this_list(list_of_false)

    for word_you_got_wrong in list_of_false:
        print(word_you_got_wrong.art + " " + word_you_got_wrong.ger)

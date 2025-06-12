from random import shuffle

WORD_LIST_SIZE = 50

with open("2000.txt") as f:
    w_list = f.readlines()

w_list_300 = w_list[:300]
shuffle(w_list_300)
w_list_final = w_list_300[:WORD_LIST_SIZE]

with open("../ucenje_novih_reci/new_words.txt", "w") as fw:
    fw.writelines(w_list_final)

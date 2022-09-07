import time

moneyAtMoment = 0
counter = 0

while (True):
    counter = counter + 1
    moneyAtMoment = moneyAtMoment + 0.888

    if (moneyAtMoment % 10 < 1):
        print("--------- opa, VUK! -----------")
    if (moneyAtMoment % 100 < 1):
        print("--------- opa, NIKOLA! -----------")

    print(str(round(moneyAtMoment, 2)))

    time.sleep(1)

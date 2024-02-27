#shnippet to keep the column names as letters of alphabet, rather than using labels from CSV


def ABCs():
    ## str initialization
    char = "A"

    ## converting char to bytes
    b = bytes(char, 'utf-8')

    ## adding 1 to first char of 'b'
    b = b[0] + 1

    ## converting 'b' into char
    print(f"Alphabet after incrementing ACII value is {chr(b)}")

ABCs()


b = bytes("A", 'utf-8')
b = b[0] + 1
letter = chr(b)
print(letter)

#shnippet to keep the column names as letters of alphabet, rather than using labels from CSV


def ABCs(column_count):
    ## str initialization
    char = "A"

    ## converting char to bytes
    b = bytes(char, 'utf-8')

    ## adding 1 to first char of 'b'
    b = b[0] + column_count

    ## converting 'b' into char
    print(f"Alphabet after incrementing ACII value is {chr(b)}")

ABCs(column_count)

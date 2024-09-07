# Password Security

## Why do we use password hashing, salting, and peppering?

### Hashing

A website will typically contain usernames and passwords for each of its users. If it stores these passwords in plaintext in the backend database and that database is breached, hackers will be able to access each account.

Thus, we'd like some safeguards that if there is a database breach, the hacker will not be able to get the plaintext password.

To prevent this, websites typically employ hashing. Websites will, on account creation, take a user’s password in as input, hash that password, and store that hashed password in its database. Then, on any login attempt, the database will take the login attempt’s password, hash it, and compare it to the stored hashed password. Now, no plaintext password is stored and if the database is breached, the hacker will only have this hash value.

This hash value is essentially useless by itself, as it cannot be used to gain access to the account. If the hacker attempts to login to the site using this hash value as a password, it will be hashed again and the login attempt will fail. The hacker must have the plaintext to access the account. However, the hash value can potentially lead the hacker to its generating plaintext password.

How do hackers convert a hash value to the password that generates it? There are tools called Rainbow Tables: large dictionaries for each of the major hashing techniques that relate hash values to common passwords. These Rainbow Tables don’t have every password… that would be an incredibly long table! Just common ones! Thus, if someone has a hash value, and the password that generates that hash value is common, someone can plug that hash value into the Rainbow Table to find the plaintext password.

### Salting

To help block the use of Rainbow Tables to perform this hash unscrambling, we use Salting. Salting involves concatenating a unique, non-secret string to the password before it is hashed to create a new hash value. Salting invalidates the use of Rainbow Tables as these new hash values with this Salt applied will be radically different from what they would be without the Salt, meaning this dictionary cannot reverse-search for the plaintext password anymore. This Salting value is stored in the database. However, even when a password is Salted, if a hacker has the hash and the salt an iterative attack can be mounted (using a tool such as John the Ripper).

So what is the point of using a salt? We use a unique salt for each user so that if two users have the same password, they won't get the same resultant hash. It also means a brute force attack would need to be mounted against each user individually rather then being able to pre-compute a rainbow table for the site. The point, and only usage, of the Salt is to prevent an attacker from attacking several N elements for less than N times the cost of attacking one.

### Peppering

Peppering is similar to Salting, however rather than using a known string appended pre-hashing, it uses a hidden string. This string typically stored securely in a configuration file, making it very hard to get ahold of. It is also non-unique, so every hash gets the same pepper. A hacker, to crack a hashed, peppered password, will need to crack the pepper first. If the pepper is complex, an iterative attack will be difficult.

## In the end, does it even matter?

Salting, Peppering, and Hashing do not protect against gaining access to an account by brute force (trying every password) or dictionary attacks (trying common passwords) blindly (with no information on the hash value stored). They only stop hackers who already have access to the password database from accessing your account & uncovering your plaintext password.

## Sources and References

[On unique Salts](https://stackoverflow.com/questions/2999197/do-i-need-a-random-salt-once-per-password-or-only-once-per-database)

[Why we bother using Salts](https://security.stackexchange.com/questions/6251/any-risk-in-using-the-same-salt-for-several-hashes-on-a-user)

[On Hashing, Salting, and Peppering](https://www.youtube.com/watch?v=eicDtA9Yu-A)

---
title: How are passwords stored?
description: In which I describe how passwords are stored in databases (hash+salt).
date: '2017-04-22'
---

Have you ever wondered how your passwords are stored in the websites you use?

Have you ever wondered why some websites tell you to set a new password, instead of sending you your forgotten password whenever you click ‘Forgot your password?’.

It’s because most websites nowadays don’t save your passwords in plain text, instead save its hash, and whenever you log in with a password, they hash it and compare the resulting hash with the one in the database. That means any attacker that gets to their database will only see the hash of your password, not the real one.

_Tip: if you forget your password and the website sends it back to you in plaintext, then that's how they store it. You should make sure you're not using that password anywhere else and just never use that site again._

##But what is a hash?

A hash is the output of a one-way function that takes an input and maps it to a fixed-length string that works as a unique signature for the given input and is ideally never produced with any other input [(Wikipedia)](https://en.wikipedia.org/wiki/Cryptographic_hash_function). The important properties of a hash function are that it’s

1. deterministic (same input gives the same hash every time)
2. practically impossible to generate the same hash from two different inputs
3. It is impossible to get the input from the hash unless you try every possible input.
4. Any change to the input, however small, would make the resulting hash unrecognizable from the original input’s hash.
   Examples of a hash function include MD5 [(broken)](http://www.win.tue.nl/hashclash/rogue-ca/.), SHA-1 [(not recommended)](https://blog.qualys.com/ssllabs/2014/09/09/sha1-deprecation-what-you-need-to-know) and SHA-3 [(recommended standard)](http://csrc.nist.gov/groups/ST/hash/sha-3/sha-3_standardization.html.).
   Unfortunately, many people can use the same passwords, and because hash functions are deterministic, it means that the hashes of those passwords would be the same. That means if a passwords database were compromised, and you know the password of one user, you could also gain access to whoever has the same password (because the hashes are the same).

##Enter salts
Salts are random data that are unique to each user, which are added to the user’s password before hashing it. Because of the 4th property of a good hash, the new hash is unrecognizable from the old one, thus even if user X and Y use the same password because X and Y have different, unique salts, the hash of each user’s password would look completely different. A salt can be publicly stored in plaintext, as it’s just random data that doesn’t provide any insight on the user’s password.

![Salting](https://thepracticaldev.s3.amazonaws.com/i/ff65yhnhfcqcv6va5nca.png)

##But how do I store passwords on my website?

[This is the _extensive_ Stack Overflow answer.](https://security.stackexchange.com/questions/211/how-to-securely-hash-passwords/31846#31846)

# README

## Sid Benavente
### pingpong, an epicodus learning project

#### Business Specs for the project

* It can count up to the provided number and return the resulting string of numbers
  * **Example input:** 2
  * **Example output:** [1, 2]


* It can identify multiples of 3 within a given string of numbers and replace those values with "ping"
  * **Example input:** 6
  * **Example output:** [1, 2, ping, 4, 5, ping]


* It can identify multiples of 5 within a given string of numbers and replace those values with "pong"
  * **Example input:** 9
  * **Example output:** [1, 2, 3, 4, pong, 6, 7, 8, 9, pong]


* It can identify multiples of 15 within a given string of numbers and replace those values with "ping-pong"
  * **Example input:** 30
  * **Example output:** [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, ping-pong, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, ping-pong]


* It can prioritize conflicts by understanding that multiples of 5 trump multiples of 3, and multiples of 15 trump multiples of 5, and so when given a string of numbers it can appropriately replace multiples of 3, 5, and 15 with "ping", "pong", and "ping-pong", respectively
  * **Example input:** 30
  * **Example output:** [1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, ping-pong, 16, 17, ping, 19, pong, ping, 22, 23, ping, pong, 26, ping, 28, 29, ping-pong]

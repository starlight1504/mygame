numberChange0 n xs = [ if x == n then 0 else x | x <- xs]

numberChange1 n xs = [ if x == n then 1 else x | x <- xs]

numberChange11 n xs = [ if x > n then 1 else x | x <- xs]

reset xs = [ 0 | x <- xs]

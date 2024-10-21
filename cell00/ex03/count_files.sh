!/bin/bash
c_count =$(find . -type f -o -type d | wc -l)
echo "$c_count"

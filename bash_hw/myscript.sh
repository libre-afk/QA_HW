-#!/bin/bash
pwd
cd /home/ana/group_29_free
mkdir test1
cd test1
mkdir test_sub{1..3}
cd test_sub2
touch file1.txt file2.txt file3.txt file4.json file5.json
mkdir {1..3}
ls -la
cd ../
mv /home/ana/group_29_free/test1/test_sub2/ {file1.txt, file3.txt} /home/ana/group_29_free/test1/test_sub3/
cp /home/ana/group_29_free/test1/test_sub2/ {file4.json, file5.json} /home/ana/group_29_free/test1/test_sub1/

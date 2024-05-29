call git add .
call git commit -m "."
call git pull
set time2=%date:~0,4%-%date:~5,2%-%date:~8,2% %time:~,2%:%time:~3,2%:%time:~6,2%
call git add .
call git commit -m "%time2%"
call git push
exit
%echo ----------End----------------%
%pause%

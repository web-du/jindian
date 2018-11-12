<?php
header("Content-Type: text/html; charset=gb2312");
function my_exec($cmd, $input='')
{
    $proc=proc_open($cmd, array(0=>array('pipe', 'r'),
        1=>array('pipe', 'w'),
        2=>array('pipe',  'w')),
        $pipes);
    fwrite($pipes[0], $input); fclose($pipes[0]);
    $stdout=stream_get_contents($pipes[1]); fclose($pipes[1]);
    $stderr=stream_get_contents($pipes[2]); fclose($pipes[2]);
    $rtn=proc_close($proc); return array( 'stdout'=>$stdout,
    'stderr'=>$stderr,
    'return'=>$rtn );
}
$need_run_file = __DIR__.'..\1\make.bat';
$need_run_file = 'D:\xampp\htdocs\wu\1\make.bat';
var_export(my_exec($need_run_file));
?>
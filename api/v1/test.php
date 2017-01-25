<?php
/**
 * Created by PhpStorm.
 * User: tannergriffin
 * Date: 11/29/2016
 * Time: 8:51 AM
 */

$pass = password_hash('password', PASSWORD_BCRYPT);
echo $pass;
echo "<br/>";
echo password_verify('password', $pass);
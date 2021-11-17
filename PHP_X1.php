Exercise 1

Write a brief sample code that connects to a mySQL DB and functions that do the
following:
<?php
$host = "localhost";
$user = "user";
$passwd = "pass";
$conn = new mysqli($host, $user, $passwd);
?>

a. Add new record (with SQL statement)
<?php
    $sql = "INSERT INTO MyData (id, name, address)
    VALUES (1, 'Hardi', 'hardi@gmail.com')";
    $conn->query($sql);
?> 

b. Update existing record (with SQL statement)
<?php
    $sql = "UPDATE MyData SET name='".$name."', address='".$address."' WHERE id=1";
    $conn->query($sql);
?> 

c. delete specific record (with SQL statement)
<?php
    $sql = "DELETE FROM MyData WHERE id=1";
    $conn->query($sql);
?> 


Exercise 2.
Write a brief sample code that iterates through a database table called users, and
fetches all records (use the following field names: client_id, client_name, client_email).
<?php

$sql = "SELECT client_id, client_name, client_email from users";
$result = $conn->query($sql);
while($row = $result->fetch_assoc()) {
    echo "Client ID: " . $row["client_id"]. " - Client Name: " . $row["client_name"]. " - Client Email " . $row["client_email"]. "<br>";
}
?>

Exercise 3
Assume you have this associative array:
array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
Write a brief sample code that loops through it and prints the name, and age.

<?php
$array = ['Peter'=> "35", "Ben"=> "37", "Joe" =>  "43"];
foreach($array as $q => $v){
    print 'Name : '.$q. ', Age : '.$v.'<br/>';
}
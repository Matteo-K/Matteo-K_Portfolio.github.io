<?php
// Redirige les erreurs dans le fichier erreurs.log
ini_set('log_errors', 'On');
ini_set('error_log', 'erreurs.log');
$logFile = 'erreurs.log';
file_put_contents($logFile, '');
file_put_contents($logFile, "Log réinitialisé le " . date('Y-m-d H:i:s') . "\n", FILE_APPEND);
?>

<header>
</header>
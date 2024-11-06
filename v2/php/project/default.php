<?php
require_once "../components/test_erreur.php";
require_once "../components/cl_projet.php";
$currentFilePath = $_SERVER['PHP_SELF'];
$currentFileName = trim(pathinfo($currentFilePath, PATHINFO_FILENAME));

// Lire le fichier JSON
$jsonContent = file_get_contents('../json/data.json');

// Décoder le JSON en tableau associatif
$data = json_decode($jsonContent, true);

// Vérifier si le décodage a réussi
if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
    die('Erreur de décodage JSON : ' . json_last_error_msg());
}

foreach ($data as $proj) {
    echo "Project : " . $proj['title'] . "<br>";
    if ($currentFileName == trim($proj['title'])) {
      $projet = new Projet($proj);
    }
}

?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $currentFileName; ?></title>
</head>
<body>
  <?php require_once "../components/header.php" ?>
  <main>

  </main>
  <?php require_once "../components/footer.php" ?>
</body>
</html>
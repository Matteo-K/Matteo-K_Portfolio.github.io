<?php

class Image {
  public $lien;
  public $alt;
  public $title;

  public function __construct($lien_, $alt_, $title_) {
    $this->lien = $lien_;
    $this->alt = $alt_;
    $this->title = $title_;
  }
}

class Projet {
  public $titre;
  public $selectionner;
  public $depot;
  public $site;
  public $competence = array();
  public $image;

  public function __construct($projet) {
    print_r($projet);
    $this->titre = $projet['title'];
    $this->depot = $projet['depot'];
  }
}

?>
<?php # dna strand return compliment array
function DNA_strand($dna) {
  return strtr($dna, 'ACGT', 'TGCA');
}
?>
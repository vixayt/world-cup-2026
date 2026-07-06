export default function Footer() {
  return (
    <footer>
      Sources: Wikipedia group and knockout-stage match reports (raw wikitext cross-check for
      Groups A&ndash;H, J, and the knockout rounds; Group K additionally cross-checked against
      ESPN/Fox Sports/Sky Sports/Yahoo Sports; Groups I and L rely on a single well-formed fetch
      that wasn't independently re-verified). One entry — Arnautović's penalty in
      Austria&ndash;Jordan — is flagged: the source literally says "90+12'", which is almost
      certainly a Wikipedia data-entry typo rather than a real stoppage-time figure; it's
      reproduced as-is with a warning rather than silently corrected. Quarterfinals onward have
      not been played yet.
    </footer>
  );
}

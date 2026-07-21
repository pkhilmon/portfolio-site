import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — Pavlo Khilmon',
  description: 'Datenschutzerklärung gemäß DSGVO.',
  alternates: { canonical: '/datenschutzerklaerung' },
};

export default function DatenschutzerklaerungPage() {
  return (
    <main className="mx-auto max-w-4xl py-nav px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">1. Datenschutz auf einen Blick</h2>

        <h3 className="text-lg font-semibold">Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
          sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
          Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>

        <h3 className="text-lg font-semibold">Datenerfassung auf dieser Website</h3>

        <h4 className="font-semibold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
          Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser
          Datenschutzerklärung entnehmen.
        </p>

        <h4 className="font-semibold">Wie erfassen wir Ihre Daten?</h4>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
          sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
          unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
          Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
          automatisch, sobald Sie diese Website betreten.
        </p>

        <h4 className="font-semibold">Wofür nutzen wir Ihre Daten?</h4>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
          gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die
          übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen
          verarbeitet.
        </p>

        <h4 className="font-semibold">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
          Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
          Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
          widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung
          der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.   
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen
          zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">2. Hosting</h2>
        <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

        <h3 className="text-lg font-semibold">Externes Hosting</h3>
        <p>
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
          erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es
          sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
          Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert
          werden, handeln.
        </p>
        <p>
          Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen
          und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
          und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter
          (Art. 6 Abs. 1 lit. f DSGVO).
          Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
          auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung
          die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers
          (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit
          widerrufbar.
        </p>
        <p>
          Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung
          seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten
          befolgen.
        </p>
        <p>Wir setzen folgende(n) Hoster ein:</p>
        <address className="not-italic">
          Vercel Inc.<br />
          340 S Lemon Ave #4133<br />
          Walnut, CA 91789<br />
          USA
        </address>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold">3. Allgemeine Hinweise und Pflichtinformationen</h2>

        <h3 className="text-lg font-semibold">Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
          behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
          Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die
          vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
          Sie erläutert auch, wie und zu welchem Zweck das geschieht.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per
          E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
          durch Dritte ist nicht möglich.
        </p>

        <h3 className="text-lg font-semibold">Hinweis zur verantwortlichen Stelle</h3>
        <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
        <address className="not-italic">
          Pavlo Khilmon<br />
          Grönenberger Str. 26b<br />
          49324 Melle<br />
          <br />
          Telefon: +49 (0) 1608069568<br />
          E-Mail:{" "}
          <a href="mailto:contact@pavlokhilmon.com" className="underline hover:no-underline">
            contact@pavlokhilmon.com
          </a>
        </address>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
          anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
          (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
        </p>

        <h3 className="text-lg font-semibold">Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
          verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
          entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
          Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
          zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder
          handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach
          Fortfall dieser Gründe.
        </p>

        <h3 className="text-lg font-semibold">
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
        </h3>
        <p>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen
          Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
          besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer
          ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt
          die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in
          die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via
          Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf
          Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten
          zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich,
          verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
          verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung
          erforderlich sind, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann
          ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
          Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen
          dieser Datenschutzerklärung informiert.
        </p>

        <h3 className="text-lg font-semibold">Empfänger von personenbezogenen Daten</h3>
        <p>
          Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen.
          Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen
          Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter,
          wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu
          verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes
          Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige
          Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir
          personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über
          Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
          gemeinsame Verarbeitung geschlossen.
        </p>

        <h3 className="text-lg font-semibold">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
          können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
          Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>

        <h3 className="text-lg font-semibold">
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung
          (Art. 21 DSGVO)
        </h3>
        <p className="uppercase text-sm leading-relaxed">
          Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben
          Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen
          die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein
          auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine
          Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch
          einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei
          denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
          Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung,
          Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
        </p>
        <p className="uppercase text-sm leading-relaxed">
          Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben
          Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender
          personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das
          Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen,
          werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der
          Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
        </p>

        <h3 className="text-lg font-semibold">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
          Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
          Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
          unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
        </p>

        <h3 className="text-lg font-semibold">Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
          Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
          maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
          an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        </p>

        <h3 className="text-lg font-semibold">Auskunft, Berichtigung und Löschung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
          unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
          Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
          können Sie sich jederzeit an uns wenden.
        </p>

        <h3 className="text-lg font-semibold">Recht auf Einschränkung der Verarbeitung</h3>
        <p>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der
          Verarbeitung besteht in folgenden Fällen:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten,
            benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie
            das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht,
            können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
          </li>
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
            Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht,
            statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen.
          </li>
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung
            zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht,
            wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen.
          </li>
        </ul>
        <p>
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese
          Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
          Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
          natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses
          der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
        </p>
      </section>

      <p className="text-sm text-muted-foreground">
        Quelle:{" "}
        <a
          href="https://www.e-recht24.de"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          e-recht24.de
        </a>
      </p>
    </main>
  );
}

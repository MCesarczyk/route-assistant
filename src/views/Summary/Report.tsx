import { Document, Page, Text, StyleSheet, Image, Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

interface ReportProps {
  summary: string
};

const Report = ({ summary }: ReportProps) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ Created with Route-Assistant ~
      </Text>
      <Text style={styles.title}>Summary of your journey</Text>
      <Text style={styles.author}>Brief information</Text>
      <Text style={styles.subtitle}>
        {summary}
      </Text>
      <Text style={styles.text}>
        {"*) Assumed 8h of driving a day."}
      </Text>
      <Image
        style={styles.image}
        src="/assets/demo.jpg"
      />
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }: any) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

export default Report;

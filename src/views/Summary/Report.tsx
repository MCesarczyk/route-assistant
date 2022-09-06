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
    fontFamily: 'Oswald',
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  text: {
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Oswald',
  },
  largerText: {
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: 'Oswald',
  },
  annotation: {
    fontSize: 10,
    textAlign: 'justify',
    marginTop: 20,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 50,
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
  summary: {
    origin: string;
    destination: string;
    routeName: string;
    totalCost: string;
    estimatedTime: string;
    instructions: string[];
  }
};

const Report = ({ summary }: ReportProps) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>~ Created with Route-Assistant ~</Text>
      <Text style={styles.title}>Summary of your journey</Text>
      <Text style={styles.subtitle}>Brief information</Text>
      <Text style={styles.text}>From: {summary?.origin} To: {summary?.destination} via: {summary?.routeName}</Text>.
      <Text style={styles.largerText}>Overall cost of the gas: {summary?.totalCost}. Estimated time of the trip: {summary?.estimatedTime} days</Text>
      <Text style={styles.annotation}>{"*) Assumed 8h of driving a day."}</Text>
      <Image
        style={styles.image}
        src="https://image.shutterstock.com/image-photo/tiny-floating-house-on-lake-600w-1980476267.jpg"
      />
      <Text style={styles.text}>{summary?.instructions}</Text>
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

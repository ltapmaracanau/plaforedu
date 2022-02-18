import React from 'react'
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const Template = ({ sourceImage }) => {
  return (
    <Document>
      <Page size='A4' orientation='landscape' style={styles.page}>
      <View>
        <Text>PlaforEDU</Text>
      </View>

      <Image src={sourceImage()} />
      </Page>
    </Document>
  )
}

export { Template };
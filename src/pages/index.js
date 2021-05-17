import { Button } from "@material-ui/core"
import React from "react"

import Layout from '../components/Layout'


export default function Home() {
  return (
    <Layout title="Youtube">
      <div>
        Clone youtube com Next.js + Material UI
            <Button variant="outlined" color="secondary" >
          Primary
            </Button>
      </div>
    </Layout>
  )
}

// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import * as Icons from '@fortawesome/fontawesome-free-solid';
// import logo from '../assets/logo.svg';
import React, { Component } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import ResponsiveContainer from '../../components/ResponsiveContainer';
import LandingCard from '../../components/landing/LandingCard';

export default class Landing extends Component {
  render = () => (
    <div className="landing">
      <ResponsiveContainer>
        <Segment vertical className="idea">
          <Grid centered container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={14}>
                <Header
                  textAlign="center"
                  content="Apa Itu Mesin Pencari Laptop?"
                  className="text-xl"
                  as="h3"
                />
                <br />
                <p className="text-md">
                  Mencari laptop yang sesuai dengan spesifikasi yang kita
                  inginkan seringkali sulit dan memakan waktu. Biasanya,
                  orang-orang mencari laptop berdasarkan beberapa poin
                  spesifikasi seperti <i>processor, RAM, </i> kapasitas, merek,
                  dan harga. Beberapa situs-situs jual beli di Indonesia sudah
                  memiliki fitur <i>filtering</i> untuk poin-poin tersebut,
                  namun rata-rata hanya memiliki <i>filter</i> berupa merek dan
                  harga. Beberapa situs-situs luar negeri sudah memiliki{' '}
                  <i>filter</i> yang cukup lengkap. Namun jika kita memakai
                  situs luar negeri, kita tidak tahu apakah produk-produk laptop
                  yang ditampilkan sudah ada di Indonesia atau belum. Untuk
                  alasan itulah, saya mencoba membuat sebuah Mesin Pencari
                  Laptop untuk orang-orang di Indonesia.
                </p>
                <p className="text-md">
                  Mesin Pencari Laptop adalah sebuah perangkat yang bisa kamu
                  gunakan untuk mencari laptop sesuai dengan spesifikasimu.
                  Mesin pencari laptop ini menggunakan data dari{' '}
                  <a href="https://www.enterkomputer.com/">
                    ENTERKomputer Indonesia
                  </a>{' '}
                  sehingga dapat dipastikan bahwa laptop hasil pencarian sudah
                  atau pernah ada di Indonesia. Mesin Pencari Laptop ini
                  dilengkapi dengan fitur <i>filtering</i> berdasarkan{' '}
                  <i>processor, RAM, </i> kapasitas, merek, dan harga. Saya
                  berharap dengan adanya Mesin Pencari Laptop ini, masyarakat
                  Indonesia menjadi lebih dimudahkan dalam mencari laptop yang
                  sesuai dengan spesifikasi yang diinginkan. Jika kamu memiliki
                  ide untuk pengembangan aplikasi ini silahkan hubungi saya pada
                  kontak{' '}
                  <NavLink exact to="/about">
                    berikut.
                  </NavLink>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment vertical className="filter">
          <Grid centered container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={14}>
                <Header
                  textAlign="center"
                  content="Cari Laptopmu Berdasarkan"
                  className="text-xl"
                  as="h3"
                />
                <br />
                <LandingCard />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </ResponsiveContainer>
    </div>
  );
}

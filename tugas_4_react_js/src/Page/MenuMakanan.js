import React, { Component } from 'react';
import ListMakanan from '../ListData/ListMakanan';

class MenuMakanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jumlah: 0,
            tampil: true,
        };
        this.PilihPesanan = this.PilihPesanan.bind(this);
        this.NasiPadang = this.NasiPadang.bind(this);
        this.Sate = this.Sate.bind(this);
        this.Soto = this.Soto.bind(this);
        this.Uduk = this.Uduk.bind(this);
        this.Kuning = this.Kuning.bind(this);
        this.Batal = this.Batal.bind(this);
    }

    PilihPesanan(value, e){
        this.setState({
            [value]: e.target.value, tampil:true

        });
    }
    NasiPadang(){
        this.setState({
            pesan: "Nasi Padang",
            jumlah: this.state.jumlah+1,
            tampil: true
        });
    }
    Sate(){
        this.setState({
            pesan: "Sate",
            jumlah: this.state.jumlah+1,
            tampil: true
        });
    }
    Soto(){
        this.setState({
            pesan: "Soto Ayam Lamongan",
            jumlah: this.state.jumlah+1,
            tampil: true
        });
    }
    Uduk(){
        this.setState({
            pesan: "Nasi Uduk",
            jumlah: this.state.jumlah+1,
            tampil: true
        });
    }
    Kuning(){
        this.setState({
            pesan: "Nasi Kuning",
            jumlah: this.state.jumlah+1,
            tampil: true
        });
    }
    Batal(){
        this.setState({
            pesan: " ",
            jumlah: 0,
            tampil: true
        });
    }
    
    render() {
        return (
            <div>
                <h3>Daftar Makanan Yang Kami Sediakan :</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan link="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
                                <center>
                                    <button onClick={this.NasiPadang}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan link="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                                <center>
                                    <button onClick={this.Sate}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan link="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                                <center>
                                    <button onClick={this.Soto}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan link="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
                                <center>
                                    <button onClick={this.Uduk}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan link="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"/>
                                <center>
                                    <button onClick={this.Kuning}>Pesan Sekarang</button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <input 
                    type="text"
                    placeholder="Masukan Pesanan Anda"
                    onChange={e => this.PilihPesanan("pesan",e)}
                />
                <input 
                    type="number"
                    placeholder="Jumlah Pesanan"
                    onChange={e => this.PilihPesanan("jumlah",e)}
                />
                <button onClick={this.Batal}>Batalkan Semua Pesanan</button>
                {this.state.tampil === true ? (
                    <div>
                    <h3>Pesanan Anda : {this.state.pesan}</h3>
                    <h3>Jumlah Pesanan : {this.state.jumlah}</h3>
                    </div>
                ):(
                    <h1>
                        <center>Anda Belum Memesan</center>
                    </h1>
                )
                }
            </div>
        );
    }
}

export default MenuMakanan;
import React, { Component } from 'react';

class FormMakanan extends Component {
    constructor(props) {
        super(props);
        this.state={
            pesanan: "",
            jumlah: ""
        };
        this.HandleChange = this.HandleChange.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
        this.HandleChangeJumlah = this.HandleChangeJumlah.bind(this);
        this.pesanan = React.createRef();
    }
    
    HandleChange(e){
        this.setState({
            pesanan: e.target.value
        });
    }
    HandleChangeJumlah(e){
        this.setState({
            jumlah: e.target.value
        });
    }
    HandleSubmit(e){
        e.preventDefault();
        alert(
            "Pesanan Anda Adalah: " + 
            this.state.pesanan + 
            " | Jumlah Pesanan: " + 
            this.state.jumlah
        );
        this.setState({
            pesanan: "",
            jumlah: ""
        });
        this.pesanan.current.focus();
    }

    render() {
        return (
            <div>
                <center>
                    <form onSubmit={this.HandleSubmit}>
                        <input 
                            onChange={this.HandleChange}
                            type="text" 
                            value={this.state.pesanan} 
                            ref={this.pesanan} 
                            placeholder="Masukan Pesanan Anda" 
                            
                        />
                        <input 
                            type="number" 
                            placeholder="Masukan Jumlah Pesanan" 
                            value={this.state.jumlah}
                            onChange={this.HandleChangeJumlah}
                        />
                        <br/>
                        <br/>
                        <input type="submit" value="Pesan"/>
                    </form>
                </center>
            </div>
        )
    }
}

export default FormMakanan;
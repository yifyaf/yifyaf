export class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.addWorkLog = this.addWorkLog.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.state = {
             open:true

           };
      }

  onOpenModal() {
     this.setState({open: this.props.openModal});
  }

  onCloseModal() {
     this.setState({open:false});
  }

  addWorkLog() {

   }



 render() {
      const bstyle = {
         backgroundColor: 'green',
         textAlign:"left",
         paddingLeft: '0px',
         color: 'white'
    };
 const {open} = this.state;
       return (
           <div>
                <Modal open={open} onClose={this.onCloseModal} little>
                <h3>hi gi</h3>

                 <Button bsStyle="success" bsSize="small" onClick ={(ev) => {console.log(ev)} }> Save </Button>
                 </Modal>
            </div>
       );
    }
}
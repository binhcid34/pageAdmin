import React, { Component } from 'react'
import MaterialTable from 'material-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable } from '@fortawesome/free-solid-svg-icons'
export default class BasicTable extends Component {
  render() {
    const data =  [{
      IdUser: 1,
      UserName: "Jena Calvey",
      Password: "ikEep8V",
      Anh_dai_dien: "http://dummyimage.com/245x100.png/dddddd/000000",
      Email: "jcalvey0@opera.com",
      IsAdmin: 0,
      So_thong_bao: 100
    }, {
      IdUser: 2,
      UserName: "Josie Drewery",
      Password: "ABDzbU",
      Anh_dai_dien: "http://dummyimage.com/189x100.png/dddddd/000000",
      Email: "jdrewery1@rediff.com",
      IsAdmin: 0,
      So_thong_bao: 35
    }, {
      IdUser: 3,
      UserName: "Dotty Woodroof",
      Password: "yDlxFQ",
      Anh_dai_dien: "http://dummyimage.com/162x100.png/dddddd/000000",
      Email: "dwoodroof2@ucla.edu",
      IsAdmin: 0,
      So_thong_bao: 48
    }, {
      IdUser: 4,
      UserName: "Gibb Ellard",
      Password: "5u7pFfVVbs",
      Anh_dai_dien: "http://dummyimage.com/120x100.png/dddddd/000000",
      Email: "gellard3@networkadvertising.org",
      IsAdmin: 0,
      So_thong_bao: 78
    }, {
      IdUser: 5,
      UserName: "Oliviero Smythin",
      Password: "m1cL5iGQFH7c",
      Anh_dai_dien: "http://dummyimage.com/227x100.png/5fa2dd/ffffff",
      Email: "osmythin4@cyberchimps.com",
      IsAdmin: 0,
      So_thong_bao: 62
    }, {
      IdUser: 6,
      UserName: "Alfie Barth",
      Password: "qb4isSOLaGC",
      Anh_dai_dien: "http://dummyimage.com/165x100.png/dddddd/000000",
      Email: "abarth5@mysql.com",
      IsAdmin: 0,
      So_thong_bao: 70
    }, {
      IdUser: 7,
      UserName: "Jolee Reinbach",
      Password: "FvpHjmd",
      Anh_dai_dien: "http://dummyimage.com/218x100.png/dddddd/000000",
      Email: "jreinbach6@mozilla.org",
      IsAdmin: 1,
      So_thong_bao: 1
    }, {
      IdUser: 8,
      UserName: "Maudie Tremblet",
      Password: "y0RBH2QyP",
      Anh_dai_dien: "http://dummyimage.com/152x100.png/5fa2dd/ffffff",
      Email: "mtremblet7@cocolog-nifty.com",
      IsAdmin: 0,
      So_thong_bao: 51
    }, {
      IdUser: 9,
      UserName: "Shana Rylance",
      Password: "Gq0Oqe",
      Anh_dai_dien: "http://dummyimage.com/162x100.png/5fa2dd/ffffff",
      Email: "srylance8@ihg.com",
      IsAdmin: 1,
      So_thong_bao: 50
    }, {
      IdUser: 10,
      UserName: "Woody Jarrard",
      Password: "lvg6BLMh6t3",
      Anh_dai_dien: "http://dummyimage.com/205x100.png/5fa2dd/ffffff",
      Email: "wjarrard9@sciencedaily.com",
      IsAdmin: 0,
      So_thong_bao: 36
    }, {
      IdUser: 11,
      UserName: "Ralina Maffeo",
      Password: "yWgJZGZvSk",
      Anh_dai_dien: "http://dummyimage.com/164x100.png/dddddd/000000",
      Email: "rmaffeoa@umn.edu",      IsAdmin: 0,
      So_thong_bao: 37
    }, {
      IdUser: 12,
      UserName: "Samson Cuesta",
      Password: "vJ12abeY",
      Anh_dai_dien: "http://dummyimage.com/123x100.png/ff4444/ffffff",
      Email: "scuestab@tumblr.com",
      IsAdmin: 0,
      So_thong_bao: 51
    }, {
      IdUser: 13,
      UserName: "Gabie Samme",
      Password: "WBKrRbroYERd",
      Anh_dai_dien: "http://dummyimage.com/170x100.png/cc0000/ffffff",
      Email: "gsammec@bigcartel.com",
      IsAdmin: 0,
      So_thong_bao: 96
    }, {
      IdUser: 14,
      UserName: "Garnet Dubble",
      Password: "5A6ic3wp",
      Anh_dai_dien: "http://dummyimage.com/241x100.png/cc0000/ffffff",
      Email: "gdubbled@berkeley.edu",      IsAdmin: 0,
      So_thong_bao: 16
    }, {
      IdUser: 15,
      UserName: "Tammi Mullard",
      Password: "kNDChrXTQLs",
      Anh_dai_dien: "http://dummyimage.com/201x100.png/dddddd/000000",
      Email: "tmullarde@linkedin.com",      IsAdmin: 0,
      So_thong_bao: 13
    }, {
      IdUser: 16,
      UserName: "Romonda Humbie",
      Password: "JC74oXgt",
      Anh_dai_dien: "http://dummyimage.com/143x100.png/ff4444/ffffff",
      Email: "rhumbief@latimes.com",      IsAdmin: 0,
      So_thong_bao: 16
    }, {
      IdUser: 17,
      UserName: "Artemas Bradock",
      Password: "q5QNPSI6q",
      Anh_dai_dien: "http://dummyimage.com/243x100.png/5fa2dd/ffffff",
      Email: "abradockg@acquirethisname.com",      IsAdmin: 0,
      So_thong_bao: 7
    }, {
      IdUser: 18,
      UserName: "Irv Seaward",
      Password: "9ejx7S7t6",
      Anh_dai_dien: "http://dummyimage.com/119x100.png/ff4444/ffffff",
      Email: "iseawardh@edublogs.org",      IsAdmin: 0,
      So_thong_bao: 42
    }, {
      IdUser: 19,
      UserName: "Fenelia Mouland",
      Password: "c29hWhTPUJHE",
      Anh_dai_dien: "http://dummyimage.com/231x100.png/dddddd/000000",
      Email: "fmoulandi@gov.uk",      IsAdmin: 0,
      So_thong_bao: 88
    }, {
      IdUser: 20,
      UserName: "Auguste Wooler",
      Password: "k11H7tUZw8",
      Anh_dai_dien: "http://dummyimage.com/101x100.png/ff4444/ffffff",
      Email: "awoolerj@bbb.org",      IsAdmin: 0,
      So_thong_bao: 83
    }, {
      IdUser: 21,
      UserName: "Tiler Blaes",
      Password: "dlcwZk8Pz",
      Anh_dai_dien: "http://dummyimage.com/204x100.png/dddddd/000000",
      Email: "tblaesk@hatena.ne.jp",      IsAdmin: 0,
      So_thong_bao: 56
    }, {
      IdUser: 22,
      UserName: "Sukey Sully",
      Password: "awOLIw",
      Anh_dai_dien: "http://dummyimage.com/131x100.png/dddddd/000000",
      Email: "ssullyl@washingtonpost.com",      IsAdmin: 0,
      So_thong_bao: 63
    }, {
      IdUser: 23,
      UserName: "Neel Jestico",
      Password: "Ygq78WOD",
      Anh_dai_dien: "http://dummyimage.com/235x100.png/dddddd/000000",
      Email: "njesticom@webnode.com",      IsAdmin: 1,
      So_thong_bao: 45
    }, {
      IdUser: 24,
      UserName: "Loralie Pavelin",
      Password: "VJV1EQnzg",
      Anh_dai_dien: "http://dummyimage.com/228x100.png/dddddd/000000",
      Email: "lpavelinn@livejournal.com",      IsAdmin: 0,
      So_thong_bao: 75
    }, {
      IdUser: 25,
      UserName: "Ofelia Glaze",
      Password: "qnwMkv",
      Anh_dai_dien: "http://dummyimage.com/150x100.png/5fa2dd/ffffff",
      Email: "oglazeo@addthis.com",      IsAdmin: 0,
      So_thong_bao: 79
    }, {
      IdUser: 26,
      UserName: "Byran McMenamin",
      Password: "MSmnhJ8HXk",
      Anh_dai_dien: "http://dummyimage.com/194x100.png/5fa2dd/ffffff",
      Email: "bmcmenaminp@sohu.com",      IsAdmin: 0,
      So_thong_bao: 60
    }, {
      IdUser: 27,
      UserName: "Frederik Olivia",
      Password: "AXTAsT3ElY",
      Anh_dai_dien: "http://dummyimage.com/228x100.png/cc0000/ffffff",
      Email: "foliviaq@webnode.com",      IsAdmin: 0,
      So_thong_bao: 52
    }, {
      IdUser: 28,
      UserName: "Reuven Kleine",
      Password: "xUgwCyPr7XG",
      Anh_dai_dien: "http://dummyimage.com/174x100.png/cc0000/ffffff",
      Email: "rkleiner@webmd.com",      IsAdmin: 0,
      So_thong_bao: 75
    }, {
      IdUser: 29,
      UserName: "Mikkel Bourner",
      Password: "LwQZbNrl",
      Anh_dai_dien: "http://dummyimage.com/215x100.png/5fa2dd/ffffff",
      Email: "mbourners@tinyurl.com",      IsAdmin: 0,
      So_thong_bao: 47
    }, {
      IdUser: 30,
      UserName: "Cherida Cohalan",
      Password: "CWBnT2B0",
      Anh_dai_dien: "http://dummyimage.com/112x100.png/ff4444/ffffff",
      Email: "ccohalant@businesswire.com",      IsAdmin: 0,
      So_thong_bao: 48
    }]
    const columns = [
      {
        title:'IdUser',field:'IdUser'
      },
      {
        title:'UserName',field:'UserName'
      },
      {
        title:'Image',field:'Anh_dai_dien'
      },
      {
        title:'Email',field:'Email'
      },
      {
        title:'IsAdmin',field:'IsAdmin'
      }
    ]
    
    return (
      <div>
          <div>   
               <div className="content-page">
        {/* Start content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-holder">
                  <h1 className="main-title float-left">DataTables</h1>
                  <ol className="breadcrumb float-right">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active">DataTables</li>
                  </ol>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="card mb-3">
                  <div className="card-header">
                    <h3><FontAwesomeIcon icon = {faTable} /> Basic data table</h3>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <MaterialTable  id="dataTable" title ="User Detail"
                        data ={data}
                        columns ={columns}
                      />
                    </div>
                    {/* end table-responsive*/}
                  </div>
                  {/* end card-body*/}
                </div>
                {/* end card*/}
              </div>
            </div>
            {/* end row*/}
          </div>
          {/* END container-fluid */}
        </div>
        {/* END content */}
      </div>
      </div>
      </div>
    )
  }
}

import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="container mt-3">
	            <div className="row">
                <div className="col-md-6 offset-md-6">
                    <div className="span12">
                        <form id="custom-search-form" className="form-search form-horizontal pull-right">
                            <div className="input-append span12">
                                <input type="text" className="search-query" placeholder="Cari konselor berdasarkan kota .." value={this.props.keyword} onChange={this.props.doSearch}/>
                                <button type="submit" className="btn"><i class="fas fa-search-location"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
	            </div>
                </div>
            </div>
        )
    }
}
export default Search;
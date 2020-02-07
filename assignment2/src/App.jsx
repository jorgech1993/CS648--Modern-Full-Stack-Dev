const initialIssues = [];

class IssueTable extends React.Component{
	render(){ 
		const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue}/>);

		return(
			<table className="bordered-table">
				<thead>
					<tr>
						<th className="bordered-table">Product Name</th>
						<th className="bordered-table">Price</th>
						<th className="bordered-table">Category</th>
						<th className="bordered-table">Image</th>
					</tr>
				</thead>
				<tbody>
					{issueRows}
				</tbody>
			</table>
		);
	}
}

class IssueRow extends React.Component{
	render(){
		const issue = this.props.issue;
		return(		
			<tr>
				<td className="bordered-table">{issue.productName}</td>
				<td className="bordered-table">{'$' + issue.pricePerUnit}</td>
				<td className="bordered-table">{issue.category}</td>
				<td className="bordered-table"> <a href= {issue.imageUrl} rel="noopener noreferrer" target="_blank">View</a></td>
			</tr>
		);
	}
}

class IssueAdd extends React.Component{

	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const form = document.forms.issueAdd;
		const issue = {
			category: form.category.value,
			pricePerUnit: form.pricePerUnit.value.replace('$',''),
			productName: form.productName.value,
			imageUrl: form.imageUrl.value,
		}

		this.props.createIssue(issue);
		form.category.value = " ";
		form.pricePerUnit.value = "$";
		form.productName.value = "";
		form.imageUrl.value = "";
	}

	render(){
		return(
			<form id="inventoryForm" name="issueAdd" onSubmit={this.handleSubmit}>
				<table className="formTable">
					<tbody>
						<tr>
							<td className="formTableData">
								Category
							</td>
							<td className="formTableData">
								Price Per Unit
							</td>
						</tr>

						<tr>
							<td className="formTableData">
								<select id="categoryList" name="category">
									<option value = " "></option>
									<option value = "Shirts">Shirts</option>
									<option value = "Jeans">Jeans</option>
									<option value = "Jackets">Jackets</option>
									<option value = "Sweaters">Sweaters</option>
									<option value = "Accessories">Accessories</option>
							    </select>
							</td>
							<td className="formTableData">
								<input type="text" name="pricePerUnit" defaultValue="$"/>
							</td>
						</tr>

						<tr>
							<td className="formTableData">
								Product Name
							</td>
							<td className="formTableData">
								Image URL
							</td>

						</tr>

						<tr>
							<td className="formTableData">
								<input type="text" name="productName"/>
							</td>
							<td className="formTableData">
								<input type="text" name="imageUrl"/>
							</td>
						</tr>
					</tbody>
				</table>

				<button id="addButton">Add Product</button>
			</form>
		);
	}
}

class IssueList extends React.Component{

	constructor(){
		super();
		this.state = {issues: []};
		this.createIssue = this.createIssue.bind(this);
	}

	createIssue(issue){
		issue.id = this.state.issues.length + 1;
		const newIssueList = this.state.issues.slice();
		newIssueList.push(issue);
		this.setState({issues: newIssueList});
	}

	componentDidMount(){
		this.loadData();
	}

	loadData(){
		setTimeout(() =>{
			this.setState({issues: initialIssues});
		}, 500);
	}

	render(){
		return(
			<React.Fragment>
				<h1>My Company Inventory</h1>
				<div id="tableHeader">Showing all available products</div>
				<hr align="left"/>
				<IssueTable  issues={this.state.issues} />
				<div id="fieldsHeader">Add a new product to inventory</div>
				<hr align="left"/>
				<IssueAdd createIssue={this.createIssue} />
			</React.Fragment>
		);
	}
}

const element = <IssueList/>;

ReactDOM.render(element, document.getElementById('contents'));
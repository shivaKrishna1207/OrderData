import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
padding: 1rem;

table {
  border-spacing: 0;
  border: 1px solid black;
  margin-left:auto;
  margin-right:auto;

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child {
      border-right: 0;
    }
  }
}

`
var scope = {
    tableStyle: {
        borderRight: 'none'
    }
};

const Table = (props) => {
    return (
        <Styles>
            <h1> {props.title} </h1>
            <table>
                <thead>
                    <tr>
                        {Object.keys(props.tableData).map((oneKey) => (
                            <th>{oneKey}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <td>
                        <th>
                            Quantity
                      </th>
                        <th style={scope.tableStyle}>
                            Price
                      </th>

                        {Object.keys(props.tableData["buys"]).sort((a, b) => a.item > b.item ? 1 : -1).map((item) => (
                            props.tableData["buys"][item] !== 0 ?
                                <tr>
                                    <td>{props.tableData["buys"][item]}</td>
                                    <td>${item}</td>
                                </tr> : ""
                        ))}

                    </td>
                    <td>
                        <th>
                            Quantity
                      </th>
                        <th style={scope.tableStyle}>
                            Price
                      </th>

                        {Object.keys(props.tableData["sells"]).sort((a, b) => a.item > b.item ? -1 : 1).map((item) => (
                            props.tableData["sells"][item] !== 0 ?
                                <tr>
                                    <td>{props.tableData["sells"][item]}</td>
                                    <td>${item}</td>
                                </tr> : ""
                        ))}
                    </td>
                </tbody>
            </table>
        </Styles>
    )
}

export default Table;
import { Table } from "components/Table"
import { useState } from "react"

export const DiagramTab = () => {

    const response = [
        {categoryColor: "#FED057", categoryName: "Basic expenses", categorySum: "8700.00"},
        {categoryColor: "#FFD8D0", categoryName: "Products", categorySum: "3800.74"},
        {categoryColor: "#FD9498", categoryName: "Car", categorySum: "1500.00"},
        {categoryColor: "#C5BAFF", categoryName: "Self care", categorySum: "800.00"},
        {categoryColor: "#6E78E8", categoryName: "Child care", categorySum: "2208.50"},
        {categoryColor: "#4A56E2", categoryName: "Household products", categorySum: "300.00"},
        {categoryColor: "#81E1FF", categoryName: "Education", categorySum: "3400.00"},
        {categoryColor: "#24CCA7", categoryName: "Leisure", categorySum: "1230.00"},
        {categoryColor: "#00AD84", categoryName: "Other expenses", categorySum: "610.00"},
    ]

    const [tableData] = useState(response);



    return (
        
        <Table tableData={tableData}/>
    )
}
import React, { useState } from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const SellHistory = () => {
  // Mock dati vendite
  const [sales] = useState([
    {
      id: 1,
      product: "Prodotto A",
      quantity: 2,
      unitPrice: 50,
      date: "2025-05-01",
    },
    {
      id: 2,
      product: "Prodotto B",
      quantity: 1,
      unitPrice: 100,
      date: "2025-05-03",
    },
    {
      id: 3,
      product: "Prodotto C",
      quantity: 5,
      unitPrice: 20,
      date: "2025-05-05",
    },
    {
      id: 4,
      product: "Prodotto A",
      quantity: 1,
      unitPrice: 50,
      date: "2025-05-07",
    },
    {
      id: 5,
      product: "Prodotto B",
      quantity: 3,
      unitPrice: 100,
      date: "2025-05-08",
    },
  ]);

  // Stato filtri data
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Filtro vendite per intervallo date
  const filteredSales = sales.filter((sale) => {
    const saleDate = new Date(sale.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    return (!start || saleDate >= start) && (!end || saleDate <= end);
  });

  // Calcolo fatturato totale (tutte le vendite)
  const totalRevenue = sales.reduce(
    (sum, sale) => sum + sale.quantity * sale.unitPrice,
    0
  );

  // Dati aggregati per grafico: vendite totali per data
  const chartData = Object.values(
    filteredSales.reduce((acc, sale) => {
      if (!acc[sale.date]) acc[sale.date] = { date: sale.date, total: 0 };
      acc[sale.date].total += sale.quantity * sale.unitPrice;
      return acc;
    }, {})
  );

  return (
    <Container className="py-4">
      <h3 className="mb-4">Storico Vendite</h3>

      {/* Fatturato totale */}
      <Row className="mb-4">
        <Col>
          <h5>
            Fatturato Totale:{" "}
            <span className="text-success">{totalRevenue.toFixed(2)}€</span>
          </h5>
        </Col>
      </Row>

      {/* Filtri per intervallo di date */}
      <Form>
        <Row className="align-items-center mb-4">
          <Col xs={12} md={3}>
            <Form.Label>Da:</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Col>
          <Col xs={12} md={3}>
            <Form.Label>A:</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Col>
        </Row>
      </Form>

      {/* Tabella vendite filtrate */}
      <Row className="mb-5">
        <Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID Ordine</th>
                <th>Prodotto</th>
                <th>Quantità</th>
                <th>Prezzo Unitario</th>
                <th>Totale</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {filteredSales.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    Nessuna vendita nel periodo selezionato.
                  </td>
                </tr>
              ) : (
                filteredSales.map((sale) => (
                  <tr key={sale.id}>
                    <td>{sale.id}</td>
                    <td>{sale.product}</td>
                    <td>{sale.quantity}</td>
                    <td>{sale.unitPrice.toFixed(2)}€</td>
                    <td>{(sale.quantity * sale.unitPrice).toFixed(2)}€</td>
                    <td>{sale.date}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Grafico andamento vendite */}
      <Row>
        <Col>
          <h5>Andamento Vendite</h5>
          {chartData.length === 0 ? (
            <p className="text-center text-muted">
              Nessun dato per il periodo selezionato.
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip formatter={(value) => `${value.toFixed(2)}€`} />
                <Legend />
                <Bar dataKey="total" name="Vendite (€)" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SellHistory;

import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  CircularProgress,
  IconButton,
  Divider,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RefreshIcon from "@mui/icons-material/Refresh";

const Dashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    categories: 0,
    revenue: 0,
    orders: 0,
  });

  const [loading, setLoading] = useState(true);

  // Fake data for charts
  const salesData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 2780 },
    { name: "May", sales: 1890 },
    { name: "Jun", sales: 2390 },
    { name: "Jul", sales: 3490 },
  ];

  const categoryData = [
    { name: "Electronics", value: 400 },
    { name: "Clothing", value: 300 },
    { name: "Books", value: 300 },
    { name: "Home & Kitchen", value: 200 },
    { name: "Sports", value: 100 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  // Simulated API call
  const fetchStats = () => {
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      // Fake data
      setStats({
        products: 120,
        categories: 15,
        revenue: 25600,
        orders: 89,
      });
      setLoading(false);
    }, 1000);
  };
  // const fetchStats = async () => {
  //   setLoading(true);
  //   try {
  //     const [productsRes, categoriesRes] = await Promise.all([
  //       axios.get('/api/products/count'),
  //       axios.get('/api/categories/count')
  //     ]);

  //     setStats({
  //       products: productsRes.data.count,
  //       categories: categoriesRes.data.count,
  //       // Các thông tin khác từ API
  //     });
  //   } catch (error) {
  //     console.error('Failed to fetch dashboard data', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  useEffect(() => {
    fetchStats();
  }, []);

  const handleRefresh = () => {
    fetchStats();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard Overview
        </Typography>
        <IconButton onClick={handleRefresh} color="primary">
          <RefreshIcon />
        </IconButton>
      </Box>

      <Grid container spacing={3}>
        {/* Stats Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", bgcolor: "#f5f5f5", boxShadow: 3 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography color="text.secondary" gutterBottom>
                  Total Products
                </Typography>
                <InventoryIcon color="primary" fontSize="large" />
              </Box>
              {loading ? (
                <CircularProgress size={24} />
              ) : (
                <Typography variant="h4" component="div">
                  {stats.products}
                </Typography>
              )}
              <Typography variant="body2" color="primary">
                +3.5% from last week
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", bgcolor: "#f5f5f5", boxShadow: 3 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography color="text.secondary" gutterBottom>
                  Total Categories
                </Typography>
                <CategoryIcon color="secondary" fontSize="large" />
              </Box>
              {loading ? (
                <CircularProgress size={24} />
              ) : (
                <Typography variant="h4" component="div">
                  {stats.categories}
                </Typography>
              )}
              <Typography variant="body2" color="secondary">
                +1.2% from last week
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", bgcolor: "#f5f5f5", boxShadow: 3 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography color="text.secondary" gutterBottom>
                  Total Revenue
                </Typography>
                <AttachMoneyIcon
                  sx={{ color: "success.main" }}
                  fontSize="large"
                />
              </Box>
              {loading ? (
                <CircularProgress size={24} />
              ) : (
                <Typography variant="h4" component="div">
                  ${stats.revenue.toLocaleString()}
                </Typography>
              )}
              <Typography variant="body2" sx={{ color: "success.main" }}>
                +12.5% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%", bgcolor: "#f5f5f5", boxShadow: 3 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography color="text.secondary" gutterBottom>
                  Total Orders
                </Typography>
                <ShoppingCartIcon
                  sx={{ color: "warning.main" }}
                  fontSize="large"
                />
              </Box>
              {loading ? (
                <CircularProgress size={24} />
              ) : (
                <Typography variant="h4" component="div">
                  {stats.orders}
                </Typography>
              )}
              <Typography variant="body2" sx={{ color: "warning.main" }}>
                +5.8% from last week
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Charts */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>
              Sales Overview
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={salesData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>
              Category Distribution
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Recent Products */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2" color="text.secondary">
              • New product "Smartphone X" added to Electronics category
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • Category "Smart Home" created
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • Product "Laptop Pro" updated: price changed from $1200 to $1150
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • 5 new orders received in the last 24 hours
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

// URL base de la API
const BASE_URL = "http://vacantsbackendgates-production.up.railway.app/api/v1";

// Definición de los endpoints
const endpoints = {
  vacants: {
    getVacantById: (id: string) => `${BASE_URL}/vacants/${id}`,  // GET /vacants/{id}
    updateVacant: (id: string) => `${BASE_URL}/vacants/${id}`,   // PUT /vacants/{id}
    deleteVacant: (id: string) => `${BASE_URL}/vacants/${id}`,   // DELETE /vacants/{id}
    getAllVacants: `${BASE_URL}/vacants`,                        // GET /vacants
    createVacant: `${BASE_URL}/vacants`,                         // POST /vacants
  },
  company: {
    getCompanyById: (id: string) => `${BASE_URL}/company/${id}`, // GET /company/{id}
    updateCompany: (id: string) => `${BASE_URL}/company/${id}`,  // PUT /company/{id}
    deleteCompany: (id: string) => `${BASE_URL}/company/${id}`,  // DELETE /company/{id}
    getAllCompaniesPaginated: `${BASE_URL}/company`,            // GET /company (paginada)
    createCompany: `${BASE_URL}/company`,                       // POST /company
    getAllCompanies: `${BASE_URL}/company/all`,                 // GET /company/all (sin paginar)
  }
};

export default endpoints;

async actualizarTRM() {
    try {
        // Opción 1: API gratuita (aproximada)
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        this.datos.trm = data.rates.COP;
        
        // Opción 2: API Colombia (requiere token)
        // const response = await fetch('https://www.datos.gov.co/resource/32sa-8pi3.json?$limit=1&$order=vigenciadesde DESC');
        
        this.guardarDatos();
        this.actualizarUI();
        this.mostrarNotificacion('✅ TRM actualizada desde fuente oficial');
    } catch (error) {
        this.mostrarNotificacion('⚠️ Usando datos locales', 'error');
    }
}
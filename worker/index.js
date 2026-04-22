export default {
  async fetch(request, env) {
    // Handle CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { 
        status: 405, 
        headers: corsHeaders 
      });
    }

    try {
      const data = await request.json();
      const { name, email, company, service, message } = data;

      // Validate required fields
      if (!name || !email || !message) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: 'Missing required fields: name, email, and message are required' 
          }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: 'Invalid email format' 
          }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Insert form submission into D1 database
      const result = await env.contact_form_db
        .prepare(
          'INSERT INTO form_submissions (name, email, company, service, message) VALUES (?, ?, ?, ?, ?)'
        )
        .bind(name, email, company || null, service || null, message)
        .run();

      if (!result.success) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: 'Failed to save form submission' 
          }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Form submitted successfully' 
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error('Form submission error:', error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Internal server error: ' + error.message 
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  }
};

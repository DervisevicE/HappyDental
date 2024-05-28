package com.bek.DentalClinic.controllers;
import com.sendgrid.*;

import java.io.IOException;

public class SendGridHelperClass {
    public static void main(String[] args) throws IOException {
        try {
            SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
            Request request = new Request();
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody("{\"personalizations\":[{\"to\":[{\"email\":\"kforto1@etf.unsa.ba\"}],\"subject\":\"Thank you for your order!\"}],\"from\":{\"email\":\"nsabotic1@etf.unsa.ba\"},\"content\":[{\"type\":\"text/plain\",\"value\": \"Thank you for your purchase from Happy Dental. We are excited to confirm your order and appreciate your business! \\nShipping Details:\\nYour order will be shipped via our delivery team and is estimated to arrive on 10/06/2024.\\n\\nIf you have any questions or need further assistance, please do not hesitate to contact our customer service team at nsabotic1@etf.unsa.ba or at +38762333222.\\n\\nThank you again for shopping with us. We hope you enjoy your purchase!\\n\\nWarm regards,\\n\\nHappy Dental Team!\\n\"}]}");
            Response response = sg.api(request);
            System.out.println(response.getStatusCode());
            System.out.println(response.getBody());
            System.out.println(response.getHeaders());
        } catch (IOException ex) {
            throw ex;
        }
    }
    }

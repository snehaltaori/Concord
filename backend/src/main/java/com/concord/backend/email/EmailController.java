package com.concord.backend.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class EmailController {
    @Autowired
    private EmailService emailService;

    @PostMapping("/sendMail")
    public String sendMail(@RequestBody EmailDetails details) {
        if (details.getRecipient() == null || details.getSubject() == null || details.getMsgBody() == null) {
            throw new IllegalArgumentException("Recipient, subject, and body must not be null");
        }
        String status = emailService.sendSimpleMail(details);

        return status;
    }

}

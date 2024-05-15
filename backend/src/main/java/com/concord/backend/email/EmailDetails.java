package com.concord.backend.email;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmailDetails {
    // Scaling needs to be done here
    private String recipient;
    private String msgBody;
    private String subject;
}

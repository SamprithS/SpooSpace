package com.app.SpooSpace.utility;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class LoggingAspect {
    @Pointcut("execution(* com.app.SpooSpace.controller.*.*(..))")
    public void controllerMethods() {}

    @Before("controllerMethods()")
    public void logRequest(JoinPoint joinPoint) {
        log.info("🚀 SpooSpace API Call: {}", joinPoint.getSignature().getName());
    }

    @AfterReturning(pointcut = "controllerMethods()", returning = "result")
    public void logResponse(JoinPoint joinPoint, Object result) {
        log.info("✅ SpooSpace API Success: Response sent for {}", joinPoint.getSignature().getName());
    }
}

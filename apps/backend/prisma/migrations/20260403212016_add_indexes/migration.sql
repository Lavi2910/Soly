-- CreateIndex
CREATE INDEX "Appointment_providerId_time_idx" ON "Appointment"("providerId", "time");

-- CreateIndex
CREATE INDEX "Appointment_customerId_time_idx" ON "Appointment"("customerId", "time");

-- CreateIndex
CREATE INDEX "Appointment_serviceId_idx" ON "Appointment"("serviceId");

-- CreateIndex
CREATE INDEX "Service_businessId_idx" ON "Service"("businessId");

-- CreateIndex
CREATE INDEX "User_worksAtId_idx" ON "User"("worksAtId");

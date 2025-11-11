#########################################
# Outputs - Key Infrastructure Details
#########################################

# EC2
output "ec2_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.app.public_ip
}

output "ec2_instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.app.id
}

# Networking
output "vpc_id" {
  description = "VPC ID"
  value       = aws_vpc.main.id
}

output "subnet_id" {
  description = "Public Subnet ID"
  value       = aws_subnet.public.id
}

# ECR
output "frontend_ecr_url" {
  description = "ECR Repository URL for the frontend image"
  value       = aws_ecr_repository.frontend.repository_url
}

output "backend_ecr_url" {
  description = "ECR Repository URL for the backend image"
  value       = aws_ecr_repository.backend.repository_url
}

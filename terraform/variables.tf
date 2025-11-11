##############################
# General AWS Configuration
##############################
variable "aws_region" {
  description = "AWS region to deploy the infrastructure"
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
  description = "Name prefix for AWS resources"
  type        = string
  default     = "aurabeauty"
}

##############################
# EC2 Configuration
##############################
variable "ami_id" {
  description = "AMI ID for the EC2 instance"
  type        = string
  default     = "ami-02b8269d5e85954ef"
}

variable "instance_type" {
  description = "Instance type for EC2 (t2.micro is Free Tier eligible)"
  type        = string
  default     = "m7i-flex.large"
}

variable "key_pair_name" {
  description = "Existing EC2 key pair name for SSH access"
  type        = string
  default = "ud_key"
}

##############################
# Networking Configuration
##############################
variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnet_cidr" {
  description = "CIDR block for the public subnet"
  type        = string
  default     = "10.0.1.0/24"
}


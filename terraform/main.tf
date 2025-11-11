terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.100.0"
    }
  }
}

provider "azurerm" {
  features {}
}

# ----------------------------
# Resource Group
# ----------------------------
resource "azurerm_resource_group" "rg" {
  name     = "rg-aurabeauty"
  location = "East US"
}

# ----------------------------
# Virtual Network + Subnet
# ----------------------------
resource "azurerm_virtual_network" "vnet" {
  name                = "vnet-aurabeauty"
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
}

resource "azurerm_subnet" "subnet" {
  name                 = "subnet-aurabeauty"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.0.1.0/24"]
}

# ----------------------------
# Public IP
# ----------------------------
#resource "azurerm_public_ip" "pip" {
#  name                = "pip-aurabeauty"
#  location            = azurerm_resource_group.rg.location
#  resource_group_name = azurerm_resource_group.rg.name
#  allocation_method   = "Dynamic"
#  sku                 = "Basic"
#}

# ----------------------------
# Network Interface
# ----------------------------
resource "azurerm_network_interface" "nic" {
  name                = "nic-aurabeauty"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.subnet.id
    private_ip_address_allocation = "Dynamic"
    #public_ip_address_id          = azurerm_public_ip.pip.id
  }
}

# ----------------------------
# Linux VM (Free-tier size)
# ----------------------------
resource "azurerm_linux_virtual_machine" "vm" {
  name                = "vm-aurabeauty"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  size                = "Standard_B1s" # ✅ Free-tier eligible size
  admin_username      = "azureuser"
  network_interface_ids = [
    azurerm_network_interface.nic.id
  ]

  admin_ssh_key {
    username   = "azureuser"
    public_key = file("~/.ssh/id_rsa.pub")
  }

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS" # ✅ free-tier compatible
    name                 = "disk-aurabeauty"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "18_04-lts-gen2"
    version   = "latest"
  }
}

# ----------------------------
# Output public IP
# ----------------------------
#output "vm_public_ip" {
#  value = azurerm_public_ip.pip.ip_address
#}

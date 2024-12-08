import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkSecurityClientTlsPolicyArgsClientCertificateCertificateProviderInstance {
  plugin_instance: string;
}

export interface GoogleNetworkSecurityClientTlsPolicyArgsClientCertificateGrpcEndpoint {
  target_uri: string;
}

export interface GoogleNetworkSecurityClientTlsPolicyArgsClientCertificate {
  certificate_provider_instance?: GoogleNetworkSecurityClientTlsPolicyArgsClientCertificateCertificateProviderInstance;
  grpc_endpoint?: GoogleNetworkSecurityClientTlsPolicyArgsClientCertificateGrpcEndpoint;
}

export interface GoogleNetworkSecurityClientTlsPolicyArgsServerValidationCaCertificateProviderInstance {
  plugin_instance: string;
}

export interface GoogleNetworkSecurityClientTlsPolicyArgsServerValidationCaGrpcEndpoint {
  target_uri: string;
}

export interface GoogleNetworkSecurityClientTlsPolicyArgsServerValidationCa {
  certificate_provider_instance?: GoogleNetworkSecurityClientTlsPolicyArgsServerValidationCaCertificateProviderInstance;
  grpc_endpoint?: GoogleNetworkSecurityClientTlsPolicyArgsServerValidationCaGrpcEndpoint;
}

export interface GoogleNetworkSecurityClientTlsPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkSecurityClientTlsPolicyArgs {
  description?: string;
  labels?: { [key: string]: string };
  location?: string;
  name: string;
  sni?: string;
  client_certificate?: GoogleNetworkSecurityClientTlsPolicyArgsClientCertificate;
  server_validation_ca?: GoogleNetworkSecurityClientTlsPolicyArgsServerValidationCa[];
  timeouts?: GoogleNetworkSecurityClientTlsPolicyArgsTimeouts;
}

export class google_network_security_client_tls_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNetworkSecurityClientTlsPolicyArgs) {
    const meta = {client_certificate:{isBlock:true,certificate_provider_instance:{isBlock:true},grpc_endpoint:{isBlock:true}},server_validation_ca:{isBlock:true,certificate_provider_instance:{isBlock:true},grpc_endpoint:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_security_client_tls_policy", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}

import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicyClientValidationCaCertificateProviderInstance {
  plugin_instance: string;
}

export interface GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicyClientValidationCaGrpcEndpoint {
  target_uri: string;
}

export interface GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicyClientValidationCa {
  certificate_provider_instance?: GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicyClientValidationCaCertificateProviderInstance;
  grpc_endpoint?: GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicyClientValidationCaGrpcEndpoint;
}

export interface GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicy {
  client_validation_mode?: string;
  client_validation_trust_config?: string;
  client_validation_ca?: GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicyClientValidationCa[];
}

export interface GoogleNetworkSecurityServerTlsPolicyArgsServerCertificateCertificateProviderInstance {
  plugin_instance: string;
}

export interface GoogleNetworkSecurityServerTlsPolicyArgsServerCertificateGrpcEndpoint {
  target_uri: string;
}

export interface GoogleNetworkSecurityServerTlsPolicyArgsServerCertificate {
  certificate_provider_instance?: GoogleNetworkSecurityServerTlsPolicyArgsServerCertificateCertificateProviderInstance;
  grpc_endpoint?: GoogleNetworkSecurityServerTlsPolicyArgsServerCertificateGrpcEndpoint;
}

export interface GoogleNetworkSecurityServerTlsPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkSecurityServerTlsPolicyArgs {
  allow_open?: boolean;
  description?: string;
  labels?: { [key: string]: string };
  location?: string;
  name: string;
  mtls_policy?: GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicy;
  server_certificate?: GoogleNetworkSecurityServerTlsPolicyArgsServerCertificate;
  timeouts?: GoogleNetworkSecurityServerTlsPolicyArgsTimeouts;
}

export class google_network_security_server_tls_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNetworkSecurityServerTlsPolicyArgs) {
    const meta = {mtls_policy:{isBlock:true,client_validation_ca:{isBlock:true,certificate_provider_instance:{isBlock:true},grpc_endpoint:{isBlock:true}}},server_certificate:{isBlock:true,certificate_provider_instance:{isBlock:true},grpc_endpoint:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_security_server_tls_policy", resourceName);
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

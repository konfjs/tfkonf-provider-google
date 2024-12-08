import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIamWorkloadIdentityPoolProviderArgsAws {
  account_id: string;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgsOidc {
  allowed_audiences?: string[];
  issuer_uri: string;
  jwks_json?: string;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgsSaml {
  idp_metadata_xml: string;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgsX509TrustStoreIntermediateCas {
  pem_certificate?: string;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgsX509TrustStoreTrustAnchors {
  pem_certificate?: string;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgsX509TrustStore {
  intermediate_cas?: GoogleIamWorkloadIdentityPoolProviderArgsX509TrustStoreIntermediateCas[];
  trust_anchors: GoogleIamWorkloadIdentityPoolProviderArgsX509TrustStoreTrustAnchors[];
}

export interface GoogleIamWorkloadIdentityPoolProviderArgsX509 {
  trust_store: GoogleIamWorkloadIdentityPoolProviderArgsX509TrustStore;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgs {
  attribute_condition?: string;
  attribute_mapping?: { [key: string]: string };
  description?: string;
  disabled?: boolean;
  display_name?: string;
  workload_identity_pool_id: string;
  workload_identity_pool_provider_id: string;
  aws?: GoogleIamWorkloadIdentityPoolProviderArgsAws;
  oidc?: GoogleIamWorkloadIdentityPoolProviderArgsOidc;
  saml?: GoogleIamWorkloadIdentityPoolProviderArgsSaml;
  timeouts?: GoogleIamWorkloadIdentityPoolProviderArgsTimeouts;
  x509?: GoogleIamWorkloadIdentityPoolProviderArgsX509;
}

export class google_iam_workload_identity_pool_provider extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIamWorkloadIdentityPoolProviderArgs) {
    const meta = {aws:{isBlock:true},oidc:{isBlock:true},saml:{isBlock:true},timeouts:{isBlock:true},x509:{isBlock:true,trust_store:{isBlock:true,intermediate_cas:{isBlock:true},trust_anchors:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "google_iam_workload_identity_pool_provider", resourceName);
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

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get workload_identity_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.workload_identity_pool_id`;
  }

  get workload_identity_pool_provider_id(): string {
    return `${this.resourceType}.${this.resourceName}.workload_identity_pool_provider_id`;
  }
}
